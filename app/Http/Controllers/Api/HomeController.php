<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function restaurant()
    {
        try {
            $restaurants = Restaurant::select('id','name','location','cuisine')->get();
        } catch (\Throwable $e) {
            return $this->sendError(message: 'Something went wrong.'. $e->getMessage());
        }
        return $this->sendResponse(data: $restaurants);
    }

    public function order()
    {
        try {
            $orders = Order::select('id','restaurant_id','order_amount','order_time')->get();
        } catch (\Throwable $e) {
            return $this->sendError(message: 'Something went wrong.'. $e->getMessage());
        }
        return $this->sendResponse(data: $orders);
    }
    
}
