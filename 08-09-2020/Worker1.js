var i=0;
function run()
{
    i=i+1;
    postMessage(i);
    setTimeout("run()",300);
}
run();