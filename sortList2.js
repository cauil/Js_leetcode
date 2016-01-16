var sortList = function(head) {
    if (!head || !head.next) return head;
    var fast = head.next.next;
    var slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    var head1 = sortList(slow.next);
    slow.next = null;
    var head2 = sortList(head);
    return mergeList(head1, head2);
};

var mergeList = function(h1, h2) {
    var dummy = new ListNode(null);
    var tail = dummy;
    while (h1 && h2) {
        if (h1.val <= h2.val) {
            tail = tail.next = h1;
            h1 = h1.next;
        } else {
            tail = tail.next = h2;
            h2 = h2.next;
        }
    }
    tail.next = h1 ? h1 : h2;
    return dummy.next;
};
