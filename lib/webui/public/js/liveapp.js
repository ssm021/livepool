// load ux
// Ext.Loader.setConfig({
//     enabled: true
// });
// Ext.Loader.setPath('Ext.ux', '../libs/ext/ux');
// Ext.require([
//     'Ext.ux.CheckColumn'
//     // 'Ext.ux.RowExpander',
// ]);

// ext component cache
var $cmp = {};

var TOOLBAR = [{
    text: 'LivePool',
    iconCls: 'icomoon-stackoverflow'
}, '-', {
    text: 'Replay',
    iconCls: 'icomoon-redo2'
}, '-', {
    text: 'Remove',
    iconCls: 'icomoon-remove2',
    menu: [{
        text: 'Remove All',
        handler: observers.onRemoveAll
    }, {
        text: 'Images'
    }, {
        text: 'CONNECTs'
    }, {
        text: 'NON 200s'
    }]
}, '-', {
    text: 'Rules',
    iconCls: 'icomoon-list3'
}, '-', {
    text: 'Find',
    iconCls: 'icomoon-search3'
}, '-', {
    text: 'Keep',
    iconCls: 'icomoon-stack'
}, '-', {
    text: 'Tools',
    iconCls: 'icomoon-tools'
}, '-', {
    text: 'View',
    iconCls: 'icomoon-browser2'
}, '-', {
    text: 'Help',
    iconCls: 'icomoon-help',
    menu: [{
        text: 'About'
    }]
}];

var MAIN_RIGHT_TABVIEW = {
    flex: 1,
    id: 'tabContainerRight',
    xtype: 'tabpanel',
    // ui: 'green-tab',
    defaults: {
        border: 0
    },
    items: [
        TAB_POOL, TAB_INSPECTORS,
        TAB_COMPOSER, TAB_FILTER, TAB_STAT,
        TAB_TIMELINE, TAB_POOL
    ]
};

var MAIN = {
    id: 'mainContainer',
    region: 'center',
    minWidth: 300,
    border: 0,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    tbar: TOOLBAR,
    items: [
        MAIN_SESSION_GRID, {
            xtype: 'splitter'
        },
        MAIN_RIGHT_TABVIEW
    ]
};

var NORTH = {
    region: 'south',
    height: 18,
    border: 0
};

Ext.grid.RowNumberer = Ext.extend(Ext.grid.RowNumberer, {
    width: 34
});

Ext.define('LivePool.App', {
    extend: 'Ext.container.Viewport',
    initComponent: function() {

        Ext.apply(this, {
            layout: 'border',
            items: [MAIN, NORTH]
        });

        this.callParent(arguments);
    }

});

Ext.onReady(function() {
    var app = new LivePool.App();

    // dom init and cache
    $cmp.logWin = Ext.getCmp('log');
    $cmp.sessionGrid = Ext.getCmp('gridpanel');
    $cmp.poolTree = Ext.getCmp('poolTree');

    // no spell check
    document.body.setAttribute('spellcheck', false);
});