
<script>
function formatDate(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = d.getFullYear();
    let date = d.getDate();
    let month = months[d.getMonth()];
    return `${month} ${date}, ${year}`
}

export default {
    name: "setDate",
    methods: {
        setDate(str) {
            let dates = str.split('-');
            let date = new Date(+dates[0], dates[1] - 1, +dates[2]);
            return formatDate(date);
        }
    }
}
</script>