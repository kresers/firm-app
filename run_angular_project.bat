@echo off
rem npm install -g @angular/cli  // d�comment� pour install� angular
SET title=
set /p title=Entrez le titre du projet a lancer:
cd %title%
ng serve --open
