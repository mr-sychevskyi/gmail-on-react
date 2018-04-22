// @flow

export type MessageData = {|
    _id: {
        $oid: string
    },
    subject: string,
    body: string,
    isRead: string,
    recipients: {
        from?: string,
        to?: string,
        cc: string,
        bcc: string
    },
    prevCollection: string,
    createdAt: string
|};
