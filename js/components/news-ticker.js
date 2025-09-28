Vue.component("news-ticker", {
    data: function()
    {
        return {
            messages: [
                "sussy game ඞ_ඞ",
                "when the impostor is troll",
                "UTTP IS BETTER",
                "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>play uttp layers</a>",
                "○☛🔫🗡ඞ↑0123456789",
                "guys i just realised that when u get layer 1.8e308 in meta there is SSSSSSSSSSSSSSSUUUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! thing that allows you to do cool stuff and btw thank you for listening to my spoiler now you know it :D",
                "susburger",
                "uttp troll                                                                                                                                                                                                                                              FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!FIRST FIRST WARNING TROLL!",
                "uttp",
                Utils.createRandomWord(2500) + " sorry my not cat stepped on my keyboard",
                "ERROR: " + Utils.createRandomWord(80) + " doent not exist",
                "XD u just got                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 really slow text that lasts forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and forever and i was actually lying",
                "SSSSSSSSSSSSSSSSSSSSSSSSSSUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
                "idk man, you look kinda uttp",
                "i am SSSSSSSSSSSSSSUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
                "FIRST FIRST WARNING TROLL!",
                "XD u just got LD!!!!!!!!!!!!!!!!!!!!",
                "YOU GOT RICKROOLED!!!!!!!!!!!!!!!!!!!!!!!!!!!"
                "<span class='flipped-v'>ඞ</span>"
            ],
            currentMessage: "FIRST FIRST WARNING TROLL!",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return this.currentMessage !== "i am S P E E D" ? 20 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length : 3;
        }
    },
    methods: {
        getMessage: function()
        {
            const arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            const index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            const element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            const anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //very black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
