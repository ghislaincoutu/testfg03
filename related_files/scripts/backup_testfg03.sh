#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie de sécurité des fichiers relatifs à l'application testfg03"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

source=/var/www/html/testfg03
destination=/home/Tests/testfg03/related_files/publication
rm $destination/*.tar.gz
tar -czvf $destination/pub_testfg03_`(date +%Y%m%d-%H%M)`.tar.gz $source/

source=/home/Tests/testfg03/
destination=/home/CopiesSecurite/testfg03_`(date +%Y%m%d-%H%M)`.tar.gz
tar --exclude=".angular" --exclude=".git" --exclude="node_modules" -czvf $destination $source
