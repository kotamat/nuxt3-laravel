<?php

namespace Tests;

use ApiSpec\ApiSpecOutput;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use ApiSpecOutput;
    use CreatesApplication;
}
