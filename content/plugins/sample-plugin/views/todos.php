<?php $this->layout('core::layouts/index', []) ?>

<div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    x-data="{todolist: []}"
    x-on:todoloaded.window="todolist = $event.detail;"
    x-on:additem.window="todolist.push($event.detail);"
>
    <h2 class="text-2xl my-8">ToDos</h2>

    <div class="mb-8">
        <label for="todoitem" class="mr-4">New Item:</label>
        <input
                type="text"
                class="rounded py-1 px-4 mr-4"
                id="todoitem"
                onkeypress="inputKeyUp(event)"
        />
        <button onclick="addItem()" type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add
        </button>
    </div>

    <div class="max-w-3xl mx-auto shadow-lg">
        <ul class="divide-y divide-gray-200">
            <template x-for="(item, id) in todolist" :key="id">
                <li class="list-group-item px-4 py-4 sm:px-6 flex">
                    <span class="flex-none" x-text="item.content"></span>
                    <span class="flex-grow"></span>
                    <a class="cursor-pointer flex-none"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></a>
                </li>
            </template>
        </ul>
    </div>
</div>

<script type="text/javascript">
    var wsServer = 'ws://127.0.0.1:8383';
    var websocket = new WebSocket(wsServer);

    function inputKeyUp(e) {
        if(e.keyCode === 13){
            e.preventDefault();
            addItem()
        }
    }

    function addItem() {
        console.log(websocket.readyState);

        let itemValue = document.getElementById('todoitem').value;

        websocket.send(JSON.stringify({
            "action": "example-create-action",
            "params": {
                "content": itemValue,
            }
        }));
        document.getElementById('todoitem').value = '';
    }

    websocket.onopen = function (evt) {
        console.log("Connected to WebSocket server.");

        websocket.send(JSON.stringify({
            "action": "example-get-action",
            "params": {}
        }));
    };

    websocket.onclose = function (evt) {
        console.log("Disconnected");
    };

    websocket.onmessage = function (evt) {
        console.log('Retrieved data from server: ' + evt.data);

        let parsedData = JSON.parse(evt.data);

        if (Array.isArray(parsedData)) {
            window.dispatchEvent(new CustomEvent('todoloaded', {
                detail: parsedData
            }));
        } else {
            window.dispatchEvent(new CustomEvent('additem', {
                detail: parsedData
            }));
        }
    };

    websocket.onerror = function (evt, e) {
        console.log('Error occured: ' + evt);
        console.log(evt);
        console.log(e);
    };
</script>