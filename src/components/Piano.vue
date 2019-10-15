<style>
    .piano {
        width: 100%;
        background: black;
    }

    .piano-key {
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .wKey {
        width: 2.85%;
        height: 250px;
        background: #ffffff;
        border-right: 1px solid #000000;
        position: relative;
    }

    .wKey:active {
        /*box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);*/
        /*top: -1%;*/
        /*height: 99%;*/
        /*background: #efefef;*/
    }

    .wKey:active:before {
        content: "";
        border-width: 250px 5px 0;
        border-style: solid;
        border-color: transparent transparent transparent rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .wKey:active:after {
        content: "";
        border-width: 250px 5px 0;
        border-style: solid;
        border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .wKey-active {

    }

    .wKey-active:before {
        content: "";
        border-width: 250px 5px 0;
        border-style: solid;
        border-color: transparent transparent transparent rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .wKey-active:after {
        content: "";
        border-width: 250px 5px 0;
        border-style: solid;
        border-color: transparent rgba(0, 0, 0, 0.1) transparent transparent;
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .piano-key-tip {
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
    }

    .piano-key-tip-keyName {
    }

    .bKey {
        position: relative;
        width: 50px;
        background: linear-gradient(-20deg, #333, #000, #333);
        border-width: 1px 2px 7px;
        border-style: solid;
        border-color: #666 #222 #111 #555;
        border-radius: 0 0 2px 2px;
        box-shadow: inset 0 -1px 2px rgba(255, 255, 255, 0.4), 0 2px 3px rgba(0, 0, 0, 0.4);
        /*overflow: hidden;*/
        color: #ffffff;
    }

    .bKey:active {
        height: 99%;
        border-bottom-width: 2px;
        box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0 rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0 #000;
    }

    .bKey-active {
        height: 99%;
        border-bottom-width: 2px;
        box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0 rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0 #000;
    }

    .bKey-active:active {
        height: 99%;
        border-bottom-width: 2px;
        box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.4), 0 1px 0 rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.4), 0 -1px 0 #000;
    }

    .bKey-wrap {
        position: absolute;
        display: flex;
        height: 65%;
        width: 10%;
    }

    .bKey:nth-child(1) {
        left: 16%;
    }

    .bKey:nth-child(2) {
        left: 25%;
    }

    .bKey:nth-child(3) {
        left: 59%;
    }

    .bKey:nth-child(4) {
        left: 69%;
    }

    .bKey:nth-child(5) {
        left: 80%;
    }

    .bKey-wrap1 {
        left: 0;
    }

    .bKey-wrap2 {
        left: 19.45%;
    }

    .bKey-wrap3 {
        left: 38.89%;
    }

    .bKey-wrap4 {
        left: 58.34%;
    }

    .bKey-wrap5 {
        left: 77.78%;
    }
</style>
<template>
    <div class="piano">
        <div class="piano-key">
            <div class="wKey" v-for="item in whiteKey" @click.stop="clickPianoKey(item.keyCode)"
                 :data-keyCode="item.keyCode">
                <div class="piano-key-tip">
                    <div class="piano-key-tip-keyName">{{item.key}}</div>
                    <div class="piano-key-tip-noteName">{{item.name}}</div>
                </div>
            </div>
            <div class="bKey-wrap bKey-wrap1">
                <div class="bKey" v-for="item in blackKey" v-if="item.id>=36&&item.id<=40"
                     @click.stop="clickPianoKey(item.keyCode)" :data-keyCode="item.keyCode">
                    <div class="piano-key-tip">
                        <div class="piano-key-tip-keyName" v-html="item.key"></div>
                    </div>
                </div>
            </div>
            <div class="bKey-wrap bKey-wrap2">
                <div class="bKey" v-for="item in blackKey" v-if="item.id>=41&&item.id<=45"
                     @click.stop="clickPianoKey(item.keyCode)" :data-keyCode="item.keyCode">
                    <div class="piano-key-tip">
                        <div class="piano-key-tip-keyName" v-html="item.key"></div>
                    </div>
                </div>
            </div>
            <div class="bKey-wrap bKey-wrap3">
                <div class="bKey" v-for="item in blackKey" v-if="item.id>=46&&item.id<=50"
                     @click.stop="clickPianoKey(item.keyCode)" :data-keyCode="item.keyCode">
                    <div class="piano-key-tip">
                        <div class="piano-key-tip-keyName" v-html="item.key"></div>
                    </div>
                </div>
            </div>
            <div class="bKey-wrap bKey-wrap4">
                <div class="bKey" v-for="item in blackKey" v-if="item.id>=51&&item.id<=55"
                     @click.stop="clickPianoKey(item.keyCode)" :data-keyCode="item.keyCode">
                    <div class="piano-key-tip">
                        <div class="piano-key-tip-keyName" v-html="item.key"></div>
                    </div>
                </div>
            </div>
            <div class="bKey-wrap bKey-wrap5">
                <div class="bKey" v-for="item in blackKey" v-if="item.id>=56&&item.id<=60"
                     @click.stop="clickPianoKey(item.keyCode)" :data-keyCode="item.keyCode">
                    <div class="piano-key-tip">
                        <div class="piano-key-tip-keyName" v-html="item.key"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
    import {whiteKey, blackKey} from "../lib/keys";
    import {SampleLibrary} from '../lib/Tone-Instruments';

    export default {
        data() {
            return {
                whiteKey: null,
                blackKey: null,
                synth: null,
                enableBlackKey: false,
                lastKeyCode: '',
                keyLock: false,
                keydownTimer: null,
            }
        },
        mounted() {
            this.whiteKey = whiteKey;
            this.blackKey = blackKey;
            this.initPiano();
        },
        beforeDestroy() {
            this.keydownTimer = null
        },
        methods: {
            async initPiano() {

                this.synth = SampleLibrary.load({
                    instruments: 'piano'
                }).toMaster();
                this.bindKeyBoardEvent();
            },
            getNoteByKeyCode(keyCode) {
                let target;
                let notes = this.whiteKey.concat(this.blackKey);
                let len = notes.length || 0;
                for (let i = 0; i < len; i++) {
                    let note = notes[i];
                    if (note.keyCode === keyCode) {
                        target = note;
                        break
                    }
                }
                return target
            },
            clickPianoKey(keyCode) {
                let pressedNote = this.getNoteByKeyCode(keyCode);
                if (pressedNote) {
                    this.playNote(pressedNote.name);
                }
            },
            playNote(noteName = 'C4', duration = "1n") {
                if (!this.synth) return
                try {
                    this.synth.triggerAttackRelease(noteName, duration)
                } catch (e) {
                    console.log(e)
                }
            },
            bindKeyBoardEvent() {
                const ShiftKeyCode = 16;
                document.addEventListener('keydown', (e) => {
                    let keyCode = String(e.keyCode);
                    if (keyCode == ShiftKeyCode) {
                        this.enableBlackKey = true
                    }
                    if (this.enableBlackKey) {
                        keyCode = "b" + keyCode;
                    }
                    if (keyCode == this.lastKeyCode) {
                        if (this.keyLock === false) {
                            this.keyLock = true
                            this.playNoteByKeyCode(keyCode);
                            this.lastKeyCode = keyCode;
                            //    todo
                            console.log('222')
                        }
                        // if (this.keydownTimer) {
                        //     clearTimeout(this.keydownTimer);
                        //     this.keydownTimer = null
                        // }
                        // this.keydownTimer = setTimeout(() => {
                        //     this.keyLock = false
                        // }, 120)

                    } else {
                        this.playNoteByKeyCode(String(keyCode));
                        this.lastKeyCode = String(keyCode);
                        this.keyLock = true
                    }
                }, false);

                document.addEventListener('keyup', (e) => {
                    let keyCode = String(e.keyCode);
                    if (keyCode == ShiftKeyCode) {
                        this.enableBlackKey = false;
                    }
                    this.keyLock = false;
                    document.querySelector(`div[data-keyCode='${keyCode}']`).classList.remove('wKey-active');
                    document.querySelector(`div[data-keyCode='b${keyCode}']`).classList.remove('bKey-active');


                }, false)
            },
            playNoteByKeyCode(keyCode) {
                let pressedNote = this.getNoteByKeyCode(keyCode);
                if (pressedNote) {
                    this.playNote(pressedNote.name);
                    let keyType = pressedNote.type;
                    if (keyType === 'white') {
                        document.querySelector(`div[data-keyCode='${pressedNote.keyCode}']`).classList.add('wKey-active');
                    } else if (keyType === 'black') {
                        document.querySelector(`div[data-keyCode='${pressedNote.keyCode}']`).classList.add('bKey-active');
                    }
                }
            },
        }
    }
</script>
