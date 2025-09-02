<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function sendResponse($data = [], $message = '', $code = 200)
    {
        $response['status']  = true;

        if (!empty($message)) {
            $response['message'] = $message;
        }

        if (!empty($data)) {
            $response['data'] = $data;
        }

        return response()->json($response, $code);
    }

    public function sendError($message = '', $errorMessages = [], $code = 422)
    {
        $response['status']  = false;
        
        if (!empty($message)) {
            $response['message'] = $message;
        }

        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
}
