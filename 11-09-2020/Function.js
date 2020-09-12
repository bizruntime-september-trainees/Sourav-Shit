function fn(id, name, mail_id) {
    console.log("id=", id);
    console.log("name=", name);
    if (mail_id != undefined) {
        console.log("mail-id=", mail_id);
    }
}
fn(1, "sourav", "sourav@gmail");
fn(2, "suman");
