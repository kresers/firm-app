@echo off
rem npm install -g @angular/cli  // d�comment� pour install� angular
SET title=
set /p title=Entrez le titre de votre projet :
ng new %title%
cd %title%
ng serve --open
echo "Projet angular cr�er avec succ�s"
pause