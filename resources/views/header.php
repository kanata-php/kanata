<div
    x-data="navbar()"
    x-init="start()"
    class="relative bg-white"
>
    <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>

    <!-- BEGIN: Desktop -->
    <div class="relative z-40">
        <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div class="flex items-center gap-8">
                <a href="/" class="flex" title="<?=APP_NAME?>">
                    <span class="sr-only"><?=APP_NAME?></span>
                    <img class="h-10 w-auto sm:h-10" width="500" src="imgs/kanata.png" alt="<?=APP_NAME?>">
                </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button @click="showMobileMenu = !showMobileMenu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <nav class="flex space-x-10">&nbsp;</nav>

                <?php if ($is_logged) { ?>
                    <!-- BEGIN: auth -->
                    <div class="flex items-center md:ml-12">
                        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">View notifications</span>
                            <!-- Heroicon name: outline/bell -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <div class="ml-3 relative">
                            <div>
                                <button @click="showUserMenu = !showUserMenu" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                </button>
                            </div>

                            <div
                                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black z-40 ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabindex="-1"
                                x-show="showUserMenu"
                                @click.away="showUserMenu = false"
                                x-cloak
                            >
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a href="/admin" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Dashboard</a>
                                <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a> -->
                                <!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a> -->
                                <a href="/logout" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>
                    <!-- END: auth -->
                <?php } else { ?>
                    <!-- BEGIN: no-auth -->
                    <div class="flex items-center md:ml-12">
                        <a href="/login" class="text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a href="/register" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                            Sign up
                        </a>
                    </div>
                    <!-- END: no-auth -->
                <?php } ?>
            </div>
        </div>
    </div>
    <!-- END: Desktop -->

    <!-- BEGIN: Mobile -->
    <div
        class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        x-transition:enter="duration-200 ease-out"
        x-transition:enter-start="opacity-0 scale-95"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="duration-100 ease-in"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-95"
        x-show="showMobileMenu"
        @click.outside="showMobileMenu = false"
        x-cloak
    >
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 sm:pb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <img class="h-8 w-auto sm:h-10" src="imgs/kanata.png" alt="<?=APP_NAME?>">
                    </div>
                    <div class="-mr-2">
                        <button @click="showMobileMenu = !showMobileMenu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span class="sr-only">Close menu</span>
                            <!-- Heroicon name: outline/x -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="py-6 px-5">
                <div class="grid grid-cols-2 gap-4">&nbsp;</div>
                <div class="mt-6">
                    <a href="/register" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                        Sign up
                    </a>
                    <p class="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="/login" class="text-blue-600 hover:text-blue-500">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- END: Mobile -->

    <button
        type="button"
        x-ref="backtotop"
        class="hidden fixed bottom-4 right-4 inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        title="Back to the top"
        @click="backToTheTop()"
    >
        <!-- Heroicon name: outline/chevron-up -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
    </button>
</div>

<script>
    function navbar() {
        return {
            showMobileMenu: false,
            showUserMenu: false,

            start() {
                this.startBackToTheTop();
            },

            startBackToTheTop() {
                window.addEventListener('scroll', this.scrollEventHandler.bind(this));
            },

            scrollEventHandler() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    this.$refs.backtotop.classList.add("block");
                    this.$refs.backtotop.classList.remove("hidden");
                } else {
                    this.$refs.backtotop.classList.add("hidden");
                    this.$refs.backtotop.classList.remove("block");
                }
            },

            backToTheTop() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            },
        };
    }
</script>