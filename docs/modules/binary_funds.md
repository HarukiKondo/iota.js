[@iota/iota.js](../README.md) / binary/funds

# Module: binary/funds

## Table of contents

### Variables

- [MAX\_FUNDS\_COUNT](binary_funds.md#max_funds_count)
- [MIN\_MIGRATED\_FUNDS\_LENGTH](binary_funds.md#min_migrated_funds_length)
- [TAIL\_HASH\_LENGTH](binary_funds.md#tail_hash_length)

### Functions

- [deserializeFunds](binary_funds.md#deserializefunds)
- [deserializeMigratedFunds](binary_funds.md#deserializemigratedfunds)
- [serializeFunds](binary_funds.md#serializefunds)
- [serializeMigratedFunds](binary_funds.md#serializemigratedfunds)

## Variables

### MAX\_FUNDS\_COUNT

• `Const` **MAX\_FUNDS\_COUNT**: *number*= 127

The maximum number of funds.

___

### MIN\_MIGRATED\_FUNDS\_LENGTH

• `Const` **MIN\_MIGRATED\_FUNDS\_LENGTH**: *number*

The minimum length of a migrated fund binary representation.

___

### TAIL\_HASH\_LENGTH

• `Const` **TAIL\_HASH\_LENGTH**: *number*= 49

The length of the tail hash length in bytes.

## Functions

### deserializeFunds

▸ **deserializeFunds**(`readStream`: [*ReadStream*](../classes/utils/readstream.readstream.md)): [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)[]

Deserialize the receipt payload funds from binary.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`readStream` | [*ReadStream*](../classes/utils/readstream.readstream.md) | The stream to read the data from.   |

**Returns:** [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)[]

The deserialized object.

___

### deserializeMigratedFunds

▸ **deserializeMigratedFunds**(`readStream`: [*ReadStream*](../classes/utils/readstream.readstream.md)): [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)

Deserialize the migrated fund from binary.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`readStream` | [*ReadStream*](../classes/utils/readstream.readstream.md) | The stream to read the data from.   |

**Returns:** [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)

The deserialized object.

___

### serializeFunds

▸ **serializeFunds**(`writeStream`: [*WriteStream*](../classes/utils/writestream.writestream.md), `objects`: [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)[]): *void*

Serialize the receipt payload funds to binary.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`writeStream` | [*WriteStream*](../classes/utils/writestream.writestream.md) | The stream to write the data to.   |
`objects` | [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)[] | The objects to serialize.    |

**Returns:** *void*

___

### serializeMigratedFunds

▸ **serializeMigratedFunds**(`writeStream`: [*WriteStream*](../classes/utils/writestream.writestream.md), `object`: [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md)): *void*

Serialize the migrated funds to binary.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`writeStream` | [*WriteStream*](../classes/utils/writestream.writestream.md) | The stream to write the data to.   |
`object` | [*IMigratedFunds*](../interfaces/models/imigratedfunds.imigratedfunds.md) | The object to serialize.    |

**Returns:** *void*