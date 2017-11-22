var custom = new Vue({
    el: "#app",
    data: {
        msg: 'coucou',
        projects: [{
            title: 'AdminSample',
            desc: 'Minimal code to create a backend module in Magento2.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/Magento2-Admin-Module-Sample',
            techs: [{
                name: 'PHP',
                class: 'php'
            }, {
                name: 'Magento2',
                class: 'magento'
            }]
        }, {
            title: 'SerieLast',
            desc: 'Very simple self-made serie tracker. Helps you remember which episode is the last seen one.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/SerieLast',
            techs: [{
                name: 'PHP',
                class: 'php'
            }, {
                name: 'Less',
                class: 'css'
            }, {
                name: 'SQLite',
                class: 'sql'
            }, {
                name: 'Bootstrap',
                class: 'css'
            }]
        }, {
            title: 'Unreality3D',
            desc: 'Developped a modular GUI layer for the scripting engine and made the logo.',
            icon: 'octicon-organization',
            link: 'https://github.com/Unreality3D',
            techs: [{
                name: 'C++',
                class: 'cpp'
            }, {
                name: 'Ogre3D',
                class: 'sfml'
            }]
        }, {
            title: 'Rtype',
            desc: 'Developped graphical part of the client for this multiplayer networked space shooter.',
            icon: 'octicon-organization',
            link: 'https://github.com/Tym17/rtype',
            techs: [{
                name: 'C++',
                class: 'cpp'
            }, {
                name: 'SFML',
                class: 'sfml'
            }]
        }, {
            title: 'Cobraxe',
            desc: 'Tiny game made with HaxeFlixel to help student discover programation.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/Cobraxe',
            techs: [{
                name: 'Haxe',
                class: 'haxe'
            }]
        }, {
            title: 'RemoteRanch',
            desc: 'Ludum Dare 37 entry. Theme was "One room". You are supposed to feed a blob without touching it.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/RemoteRanch',
            techs: [{
                name: 'Haxe',
                class: 'haxe'
            }]
        }, {
            title: 'CactaiGotchi',
            desc: 'Ludum dare 35 entry. Theme was "Shapeshift". Feed a cactus with different elements.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/CactaiGotchi',
            techs: [{
                name: 'C++',
                class: 'cpp'
            }, {
                name: 'SFML',
                class: 'sfml'
            }]
        }, {
            title: 'ZappUI',
            desc: 'Graphical client for networked multiplayer game.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/ZappUI',
            techs: [{
                name: 'C++',
                class: 'cpp'
            }, {
                name: 'SFML',
                class: 'sfml'
            }]
        }, {
            title: 'Hazmanimals',
            desc: 'Made during Global Game Jam 2017. Top down game where the player must shoot living entities to solve puzzles.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/Hazmanimals',
            techs: [{
                name: 'Haxe',
                class: 'haxe'
            }]
        }, {
            title: 'Tym17.github.io',
            desc: 'Contains infos about most of my repositories and serves me as a playground for Github\'s API.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/tym17.github.io',
            techs: [{
                name: 'Less',
                class: 'css'
            }, {
                name: 'Bootstrap',
                class: 'css'
            }, {
                name: 'VueJs',
                class: 'vue'
            }]
        }, {
            title: 'CaneléClicker',
            desc: 'CookieClicker inspired game designed to teach basics of HTML/CSS/JS to students.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/CaneleClicker',
            techs: [{
                name: 'Teaching Material',
                class: 'def'
            }, {
                name: 'CSS',
                class: 'css'
            }, {
                name: 'Javascript',
                class: 'sql'
            }]
        }, {
            title: 'MiniWolfX',
            desc: 'First person maze explorer game. Uses Raycast to draw walls and MiniLibX for the graphical aspect.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/MiniWolfX',
            techs: [{
                name: 'C',
                class: 'c'
            }, {
                name: 'MiniLibX',
                class: 'def'
            }]
        }, {
            title: 'VisualDark',
            desc: 'Atom.io Theme. Dark theme with a blue touch and blinky brackets.',
            icon: 'octicon-repo',
            link: 'https://github.com/Tym17/visualdark-syntax',
            techs: [{
                name: 'Less',
                class: 'css'
            }]
        }, {
            title: 'Magento 2 Devdocs',
            desc: 'Helped correcting dead links.',
            icon: 'octicon-git-branch',
            link: 'https://github.com/Tym17/devdocs',
            techs: [{
                name: 'Markdown',
                class: 'def'
            }]
        }]
    }
});
