<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ForgotPasswordToken
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $checkUser;
    public $verification_code;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($checkUser, $verification_code)
    {
        $this->checkUser                 = $checkUser;
        $this->verification_code    = $verification_code;
    }
}
