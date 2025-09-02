<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $restaurants  = [
            ['id' => 101,'name' => 'Tandoori Treats', 'location' => 'Bangalore','cuisine' => 'North Indian'],
            ['id' => 102,'name' => 'Sushi Bay', 'location' => 'Mumbai','cuisine' => 'Japanese'],
            ['id' => 103,'name' => 'Pasta Palace', 'location' => 'Delhi','cuisine' => 'Italian'],
            ['id' => 104,'name' => 'Burger Hub', 'location' => 'Hyderabad','cuisine' => 'American'],
        ];
        foreach ($restaurants as $key => $restaurant) {
            Restaurant::firstOrCreate($restaurant);
        }
    }
}
