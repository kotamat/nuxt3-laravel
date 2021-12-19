<?php

namespace App\Http\Controllers;

class MasterController extends Controller
{
    public function __invoke()
    {
        return config('master');
    }
}
