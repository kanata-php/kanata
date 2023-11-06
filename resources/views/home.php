<?php $this->layout('core::layouts/index', []) ?>

<div
    x-data="home()"
    x-init="start()"
    class="bg-white mt-40"
>
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 shadow-md">

        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl flex justify-center content-center">
            <css-doodle id="css-doodle-a" class="mr-4"></css-doodle>
            <span class="block mt-1">Kanata</span>
            <css-doodle id="css-doodle-b" class="ml-4"></css-doodle>
        </h2>

        <div class="mt-8 flex justify-center">
            <div class="ml-3 inline-flex">
                <a href="https://kanataphp.com" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    Learn more
                </a>
            </div>
        </div>

    </div>
</div>

<script>
    class AnimatedBoxes {
        constructor() {
            this.size = 3;
            this.doodle_a = document.querySelector('#css-doodle-a');
            this.doodle_b = document.querySelector('#css-doodle-b');
            this.drawAnimation(this.doodle_a);
            this.drawAnimation(this.doodle_b);
        }

        drawAnimation(doodle) {
            let text = ``;
            for (var i = 1; i <= this.size * this.size; i++) {
                text = text + `
                    @nth(` + i + `) {
                        transform: scale( @rand(.2s, .8s) );
                        animation-duration: @rand(.2s, .8s);
                        animation-name: logoeffect;
                        animation-iteration-count: infinite;
                        animation-direction: alternate;
                        animation-delay: @rand(-2s, -6s);
                    }
                `;
            }
            doodle.innerHTML = `
                :doodle {
                    @grid: ` + String(this.size) + ` / 50px;
                }
                background: #000;
                @keyframes logoeffect {
                    from { transform: scale(.2); }
                    to { transform: scale(.8); }
                }
                ` + text + `
            `;
        }
    }
    window.AnimatedBoxes = AnimatedBoxes;

    function home() {
        return {
            start() {
                new window.AnimatedBoxes();
            },
        };
    }
</script>
