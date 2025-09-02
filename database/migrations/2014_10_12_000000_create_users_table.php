<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('role_id')->nullable();
            $table->string('name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('nationality')->nullable();
            $table->text('address')->nullable();
            $table->string('password')->nullable();
            $table->tinyInteger('is_mobile_verified')->default(0);
            $table->string('image')->nullable();
            $table->string('token_expire_at')->nullable();
            $table->string('token')->nullable();
            $table->tinyInteger('is_email_verified')->default(0);
            $table->tinyInteger('is_terms_conditions')->default(0);
            $table->dateTime('last_login_at')->nullable();
            $table->dateTime('password_expire_at')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
