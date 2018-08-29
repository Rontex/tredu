<?php
/* func_gallery.php
Gallerian funktiot
*/

function image_information($original_file)
{
    // Ottaa tarkistettavan tiedoston nimen ja tarkistaa sen tiedostopÃ¤Ã¤tteen vÃ¤littÃ¤mÃ¤ttÃ¤ tiedostonimestÃ¤, toimii kuville
    $type = getimagesize($original_file);
    $filesize = filesize($original_file);
   
    // Tarkistetaan tiedoston tyyppi
    if($type[2] == 1) { 
		$file_extension = "gif"; 	// GIF
    } elseif($type[2] == 2) {	
		$file_extension = "jpg";  	// JPEG
    } elseif($type[2] == 3) { 		// PNG
        $file_extension = "png";
    } else {
		$file_extension = FALSE; 	// Tiedostomuoto ei ole tuettu, palauttaa FALSE
    }
    
    if($file_extension) { 			// Funktio palauttaa arvot, jos ok
        return array($type[2],$file_extension,$type[0],$type[1],$filesize); // palauttaa type,tiedostopääte,leveys,korkeus,tiedostokoko
    } else {
		return array(FALSE,FALSE,FALSE,FALSE); // Tiedostotyyppi ei ole tuettu tai jotain häiritsevää
    }
}

function create_resized_image($original_file,$destination_file,$resized_width,$resized_height)
{
    // Ottaa syötteenä vastaan (alkuperäinen tiedosto), (uuden kuvan hakemisto/tiedosto ilman päätettä), (uusi leveys), (uusi korkeus)
   
    // Selvitetään kuvan koko ja tyyppi
    list($original_width, $original_height, $type) = getimagesize($original_file);
   
    // Tarkistetaan tiedoston tyyppi
    if($type == 1) {// GIF
        $original_image = imagecreatefromgif($original_file);
            // Läpinäkyvyys -> valkoinen
            $white = imagecolorallocate($original_image, 255, 255, 255);
            $transparent = imagecolortransparent($original_image, $white);
    } elseif($type == 2) {
        $original_image = imagecreatefromjpeg($original_file); 	// JPEG
    }  elseif($type == 3) {
        $original_image = imagecreatefrompng($original_file); 	// PNG
    } else { 
        $type = FALSE; 				// Tiedostomuoto ei ole tuettu, palauttaa FALSE
    }
    if($type) {
   
        // Lasketaan kuvalle uusi koko siten, että kuvasuhde säilyy
        $new_w = $original_width/$resized_width; // Kuvasuhde: leveys
        $new_h = $original_height/$resized_height; // Kuvasuhde: korkeus
        if($new_w > $new_h || $new_w == $new_h) {
        
            if($new_w < 1) {    
                $new_w = 1; // Jos alkuperäinen kuva on pienempi kuin luotava, luodaan alkuperäisen kokoinen kuva
            }
            
			// Käytetään sitä suhdetta, jolla tulee max. asetettu leveys, korkeus on alle max.
            $new_width = $original_width / $new_w;
            $new_height = $original_height / $new_w;
			
        } elseif($new_w < $new_h) {
        
        
            if($new_h < 1) {	
                $new_h = 1; // Jos alkuperäinen kuva on pienempi kuin luotava, luodaan alkuperäisen kokoinen kuva
            }
            // Käytetään sitä suhdetta, jolla tulee max. asetettu korkeus, leveys on alle max.
            $new_width = $original_width / $new_h;
            $new_height = $original_height / $new_h;
        }
        
		// Luodaan kuva, joka on määrätyn kokoinen
        $image = imagecreatetruecolor($new_width, $new_height);
        
		// Resample, luo uuden kuvan tiedostoon
        imagecopyresampled($image, $original_image, 0, 0, 0, 0, $new_width, $new_height, $original_width, $original_height);
       
        // Tallennetaan uusi kuva määriteltyyn tiedostoon ja annetaan sopiva tiedostopääte
        if($type == 1) {
			imagegif($image, $destination_file); 	// GIF
		} elseif($type == 2) {
            imagejpeg($image, $destination_file); 	// JPEG
        } elseif($type == 3) {
			imagepng($image, $destination_file);  	// PNG
		}
    }
	imagedestroy($image); // Poistetaan kuva muistista, ei tuhoa alkuperäistä tiedostoa!
	return $type; // Palauttaa tiedostotyypin onnistuessaan, FALSE jos ei onnistu
}
    
    
function luo_kansio($maakansio,$galleriakansio) 
{  
  $ok=FALSE; 
  
  // luo galleriakansio ja pura suojaukset
  
  $polku="./sisaltokuvat/".$maakansio."/".$galleriakansio;
  if(mkdir($polku, 0777)) $ok=TRUE;
  
  //luo alikansiot thumbs, upload ja kuvat
  
  $thumbpolku= $polku."/thumbs";
  $kuvatpolku= $polku."/kuvat";
  $uploadpolku= $polku."/upload";
  if($ok) {
	 if(mkdir($thumbpolku, 0755) && mkdir($kuvatpolku, 0755) && mkdir($uploadpolku, 0755)) $ok=TRUE;
  }
	suojaa_kansio($polku);
	return $ok;
}

function pura_suojaus($kansio)
{
	chmod($kansio, 0777);
}

function suojaa_kansio($kansio)
{
	chmod($kansio, 0755);
}
?>