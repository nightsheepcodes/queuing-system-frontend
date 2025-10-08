<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Note;

Route::get('/notes', fn() => Note::all());
