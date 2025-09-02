<?php

use Illuminate\Support\Facades\Route;

Route::controller(\App\Http\Controllers\Api\HomeController::class)->group(function () {
    Route::get('restaurant', 'restaurant');
    Route::get('order', 'order');
});
