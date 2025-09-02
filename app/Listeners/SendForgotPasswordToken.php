<?php

namespace App\Listeners;

use App\Events\ForgotPasswordToken;
use App\Mail\User\ForgotPasswordMail as UserForgotPasswordToken;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendForgotPasswordToken
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ForgotPasswordToken $event)
    {
        Mail::to($event->user->email)->send(new UserForgotPasswordToken($event));
    }
}
