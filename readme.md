
After you clone this project, do the following:

modify .env for your dev

cp .env.example .env


install composer dependencies

composer install


install npm dependencies

npm install


generate a key for your application

php artisan key:generate


run the migration files to generate the schema

php artisan migrate


run the seeder to fill users table

php artisan db:seed


run webpack and watch for changes
php artisan serve
npm run serve
