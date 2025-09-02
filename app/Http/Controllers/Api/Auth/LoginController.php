<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Mail\Auth\OtpVerificationMail;
use App\Models\OtpVerification;
use App\Models\SendSms;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        
    }
}
