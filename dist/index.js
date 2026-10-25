import { format } from 'date-fns';
function getCurrentFormattedDate() {
    const now = new Date();
    return format(now, 'yyyy-MM-dd HH:mm:ss');
}
function addTwoNumbers(a, b) {
    return a + b;
}
function run() {
    console.log(addTwoNumbers(3, 5));
    console.log(getCurrentFormattedDate());
}
run();
export { getCurrentFormattedDate, addTwoNumbers };
