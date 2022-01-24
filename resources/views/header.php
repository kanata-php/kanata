<div
    x-data="navbar()"
    x-init="start()"
    class="relative bg-white"
>
    <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
    <div class="relative z-20">
        <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
                <a href="/" class="flex" title="<?=APP_NAME?>">
                    <span class="sr-only"><?=APP_NAME?></span>
                    <img class="h-10 w-auto sm:h-10" width="500" src="imgs/flightzone-bg.png" alt="<?=APP_NAME?>">
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
                <div class="flex items-center md:ml-12">
                    <a href="/login" class="text-base font-medium text-gray-500 hover:text-gray-900">
                        Sign in
                    </a>
                    <a href="/register" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    </div>

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
    >
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 sm:pb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <img class="h-8 w-auto sm:h-10" src="imgs/flightzone.png" alt="<?=APP_NAME?>">
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