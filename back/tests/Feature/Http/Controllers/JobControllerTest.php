<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Job;
use App\Models\User;
use Tests\TestCase;

class JobControllerTest extends TestCase
{
    public function testIndex()
    {
        $jobs = Job::factory()->count(2)->create();
        $res = $this->getJson(route("job.index"));

        $res->assertOk();
    }

    public function testShow()
    {
        /** @var Job $job */
        $job = Job::factory()->create();
        $res = $this->getJson(route('job.show', ['job' => $job->id]));
        $res->assertOk();
    }

    public function testDestroy()
    {
        /** @var Job $job */
        $job = Job::factory()->create();
        $res = $this->deleteJson(route('job.destroy', ['job' => $job->id]));
        $res->assertOk();
    }


    /**
     * @dataProvider provideStoreParams
     */
    public function testStore(bool $auth, bool $hasName, int $statusCode)
    {
        if ($auth) {
            /** @var User $user */
            $user = User::factory()->create();
            $this->actingAs($user);
        }
        $params = Job::factory()->make()->toArray();
        if (!$hasName) {
            unset($params['name']);
        }
        $res = $this->postJson(route('job.store'), $params);
        $res->assertStatus($statusCode);
    }

    public function provideStoreParams(): array
    {
        return [
            [
                "auth" => true,
                "name" => true,
                "expect" => 200
            ],
            [
                "auth" => false,
                "name" => true,
                "expect" => 403
            ],
            [
                "auth" => true,
                "name" => false,
                "expect" => 422
            ],
        ];

    }

    /**
     * @dataProvider provideUpdateParams
     */
    public function testUpdate(bool $auth, bool $hasName, int $statusCode)
    {
        /** @var Job $job */
        $job = Job::factory()->create();
        if ($auth) {
            $this->actingAs($job->user);
        }
        $params = Job::factory()->make()->toArray();
        if (!$hasName) {
            unset($params['name']);
        }
        $res = $this->putJson(route('job.update', ['job' => $job->id]), $params);
        $res->assertStatus($statusCode);
    }

    public function provideUpdateParams(): array
    {
        return [
            [
                "auth" => true,
                "name" => true,
                "expect" => 200
            ],
            [
                "auth" => false,
                "name" => true,
                "expect" => 403
            ],
            [
                "auth" => true,
                "name" => false,
                "expect" => 422
            ],
        ];

    }

}
