<?php

namespace Tests\Feature\Http\Controllers;

use Tests\TestCase;

class MasterControllerTest extends TestCase
{

    public function testInvoke()
    {
        $res = $this->getJson(route('master'));
        $res->assertOk();
    }
}
