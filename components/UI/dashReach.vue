<template>
    <div class="site_reach_wrapper">
        <div class="svg_">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__background" />
                <circle cx="16" cy="16" r="15.9155" class="progress-bar__progress  js-progress-bar" />
            </svg>
            <div class="data_">
                <h3>50%</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.site_reach_wrapper{
    position: relative;
    display: flex;
    flex-direction: column;

    .svg_{
        position: relative;
        display: block;
        width: 100%;
        padding: 0 10%;

        .data_{
            position: absolute;
            width: 6vw;
            height: 6vw;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background: $color-primary;
            border-radius: 50%;
            h3{
                display: block;
                margin: 0;
                color: $color-white;
                @include lgText();
                line-height: 1;
            }
        }

        svg{
            width: 100%;

            .progress-bar__background {
                fill: none;
                stroke: $border-color;
                stroke-width: 2;
            }
            
            .progress-bar__progress {
                fill: none;
                stroke: $color-primary;
                stroke-dasharray: 100;
                stroke-dashoffset: 50;
                stroke-linecap: round;
                stroke-width: 2;
                transition: stroke-dashoffset 1s ease-in-out;
            }
        }
    }
}
</style>