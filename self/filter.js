/* all_proxy, all_direct, filter*/
const dict = { "running_mode": "filter" };
const message = {
    action: "set_running_mode",
    content: dict
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log(output);
    }
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});