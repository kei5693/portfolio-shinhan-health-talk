export default [
    {
        name: 'GTAG_SEND_EVENT',
        callback: function (data) {
            console.log("GTAG_SEND_EVENT-CALL", data)
            this.$gtag.event(data.action, {
                'event_category': data.category,
                'event_label': data.label,
                'value': data.value
            });
        }
    },
];