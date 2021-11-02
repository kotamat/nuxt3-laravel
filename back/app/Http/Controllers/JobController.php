<?php

namespace App\Http\Controllers;

use App\Http\Requests\Job\StoreRequest;
use App\Http\Requests\Job\UpdateRequest;
use App\Models\Job;
use Illuminate\Database\Eloquent\Collection;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Collection|Job[]
     */
    public function index()
    {
        return Job::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return Job
     */
    public function store(StoreRequest $request)
    {
        $job = new Job();
        $params = array_merge(["user_id" => $request->user()->id,],
            $request->safe()->all()
        );
        $job->fill($params);
        return $job;
    }

    /**
     * Display the specified resource.
     *
     * @param Job $job
     * @return Job
     */
    public function show(Job $job)
    {
        return $job;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request
     * @param Job $job
     * @return Job
     */
    public function update(UpdateRequest $request, Job $job)
    {
        $job->fill($request->safe()->all());
        return $job;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Job $job
     * @return bool
     */
    public function destroy(Job $job)
    {
        return $job->delete();
    }
}
