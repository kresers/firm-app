@echo off
rem npm install -g @angular/cli  // décommenté pour installé angular
SET title=
set /p title=Name of component :
ng generate component %title%
pause