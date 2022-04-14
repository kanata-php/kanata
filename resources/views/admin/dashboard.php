<?php
$this->layout('core::layouts/admin', [
    'is_logged' => $is_logged,
])
?>

<h2 class="text-3xl mb-10">Dashboard</h2>

<button type="button" class="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
    <span class="mt-2 block text-sm font-medium text-gray-900">
        Add Widget
    </span>
</button>
