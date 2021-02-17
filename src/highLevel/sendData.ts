// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { MAX_INDEXATION_KEY_LENGTH, MIN_INDEXATION_KEY_LENGTH } from "../binary/payload";
import { SingleNodeClient } from "../clients/singleNodeClient";
import { IClient } from "../models/IClient";
import { IIndexationPayload, INDEXATION_PAYLOAD_TYPE } from "../models/IIndexationPayload";
import { IMessage } from "../models/IMessage";
import { Converter } from "../utils/converter";

/**
 * Send a data message.
 * @param client The client or node endpoint to send the data with.
 * @param indexationKey The index name.
 * @param indexationData The index data as either UTF8 text or Uint8Array bytes.
 * @returns The id of the message created and the message.
 */
export async function sendData(
    client: IClient | string,
    indexationKey: string,
    indexationData?: string | Uint8Array): Promise<{
        message: IMessage;
        messageId: string;
    }> {
    const localClient = typeof client === "string" ? new SingleNodeClient(client) : client;

    if (!indexationKey) {
        throw new Error("indexationKey must not be empty");
    }

    if (indexationKey.length < MIN_INDEXATION_KEY_LENGTH) {
        throw new Error(`The indexation key length is ${indexationKey.length
            }, which is below the minimum size of ${MIN_INDEXATION_KEY_LENGTH}`);
    }

    if (indexationKey.length > MAX_INDEXATION_KEY_LENGTH) {
        throw new Error(`The indexation key length is ${indexationKey.length
            }, which exceeds the maximum size of ${MAX_INDEXATION_KEY_LENGTH}`);
    }

    const indexationPayload: IIndexationPayload = {
        type: INDEXATION_PAYLOAD_TYPE,
        index: indexationKey,
        data: indexationData ? (typeof indexationData === "string"
            ? Converter.utf8ToHex(indexationData) : Converter.bytesToHex(indexationData)) : ""
    };

    const message: IMessage = {
        payload: indexationPayload
    };

    const messageId = await localClient.messageSubmit(message);
    return {
        message,
        messageId
    };
}
