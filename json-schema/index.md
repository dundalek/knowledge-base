
# JSON Schema

This is an overview of JSON Schema. Sources: [core specification](http://json-schema.org/latest/json-schema-core.html), [validation specification](http://json-schema.org/latest/json-schema-validation.html) by Kris Zyp

## Types

JSON Schema defines seven primitive types for JSON values:

array @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: A JSON array.

boolean @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: A JSON boolean.

integer @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: A JSON number without a fraction or exponent part.

number @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: Any JSON number. Number includes integer.

null @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: The JSON null value.

object @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: A JSON object.

string @http://json-schema.org/latest/json-schema-core.html#rfc.section.3.5
: A JSON string.


## Keywords

$schema @http://json-schema.org/latest/json-schema-core.html#rfc.section.6
: |
    The "$schema" keyword is both used as a JSON Schema version identifier and the location of a resource which is itself a JSON Schema, which describes any schema written for this particular version.<br>
    This keyword MUST be located at the root of a JSON Schema. The value of this keyword MUST be a URI [RFC3986] and a valid JSON Reference [json‑reference]; this URI MUST be both absolute and normalized. The resource located at this URI MUST successfully describe itself. It is RECOMMENDED that schema authors include this keyword in their schemas.
example: http://json-schema.org/schema#

id @http://json-schema.org/latest/json-schema-core.html#rfc.section.7.2
: The "id" keyword (or "id", for short) is used to alter the resolution scope. It is a JSON Pointer.

$ref @http://json-schema.org/latest/json-schema-core.html#rfc.section.7.2.3
: reference to schema using JSON Reference. It can be inline (within the schema) or canonical (resolve all URIs).

extends @http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.26
: |
    Specified in draft v3, removed in v4.
    The value of this property MUST be another schema which will provide
    a base schema which the current schema will inherit from.  The
    inheritance rules are such that any instance that is valid according
    to the current schema MUST be valid according to the referenced
    schema.  This MAY also be an array, in which case, the instance MUST
    be valid for all the schemas in the array.  A schema that extends
    another schema MAY define additional attributes, constrain existing
    attributes, or add other constraints.
    Conceptually, the behavior of extends can be seen as validating an
    instance against all constraints in the extending schema as well as
    the extended schema(s).  More optimized implementations that merge
    schemas are possible, but are not required.

## Validation

### number and integer

multipleOf @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.1
: A numeric instance is valid against "multipleOf" if the result of the division of the instance by this keyword's value is an integer. The value of "multipleOf" MUST be a JSON number. This number MUST be strictly greater than 0.


maximum @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2
: if "exclusiveMaximum" is not present, or has boolean value false, then the instance is valid if it is lower than, or equal to, the value of "maximum"; if "exclusiveMaximum" has boolean value true, the instance is valid if it is strictly lower than the value of "maximum". The value of "maximum" MUST be a JSON number.


exclusiveMaximum @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.2
: If "exclusiveMaximum" is present, "maximum" MUST also be present. The value of "exclusiveMaximum" MUST be a boolean. Default value false.


minimum @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3
: if "exclusiveMinimum" is not present, or has boolean value false, then the instance is valid if it is greater than, or equal to, the value of "minimum"; if "exclusiveMinimum" is present and has boolean value true, the instance is valid if it is strictly greater than the value of "minimum". The value of "minimum" MUST be a JSON number.


exclusiveMinimum @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.1.3
: If "exclusiveMinimum" is present, "minimum" MUST also be present. The value of "exclusiveMinimum" MUST be a boolean. Default value false.


### string

maxLength @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.1
: A string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword. The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.

minLength @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.2
: A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword. The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.  Default value value 0.

pattern @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.2.3
: A string instance is considered valid if the regular expression matches the instance successfully. Recall: regular expressions are not implicitly anchored. The value of this keyword MUST be a string. This string SHOULD be a valid regular expression, according to the ECMA 262 regular expression dialect.

### array

items @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1
: if "items" is not present, or its value is an object, validation of the instance always succeeds, regardless of the value of "additionalItems"; if the value of "additionalItems" is boolean value true or an object, validation of the instance always succeeds; if the value of "additionalItems" is boolean value false and the value of "items" is an array, the instance is valid if its size is less than, or equal to, the size of "items". The value of "items" MUST be either an object or an array. If it is an object, this object MUST be a valid JSON Schema. If it is an array, items of this array MUST be objects, and each of these objects MUST be a valid JSON Schema. Default is considered as an empty schema.

additionalItems @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.1
: The value of "additionalItems" MUST be either a boolean or an object. If it is an object, this object MUST be a valid JSON Schema. Default is considered as an empty schema.

maxItems @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.2
: An array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword. The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.

minItems @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.3
: An array instance is valid against "minItems" if its size is greater than, or equal to, the value of this keyword. The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0. Default value 0.

uniqueItems @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.3.4
: If this keyword has boolean value false, the instance validates successfully. If it has boolean value true, the instance validates successfully if all of its elements are unique. The value of this keyword MUST be a boolean. Default value false.

### object

maxProperties @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.1
: An object instance is valid against "maxProperties" if its number of properties is less than, or equal to, the value of this keyword. The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0.

minProperties @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.2
: An object instance is valid against "minProperties" if its number of properties is greater than, or equal to, the value of this keyword. The value of this keyword MUST be an integer. This integer MUST be greater than, or equal to, 0. Default value 0.

required @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.3
: An object instance is valid against this keyword if its property set contains all elements in this keyword's array value. The value of this keyword MUST be an array. This array MUST have at least one element. Elements of this array MUST be strings, and MUST be unique.

properties @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4
: The value of "properties" MUST be an object. Each value of this object MUST be an object, and each object MUST be a valid JSON Schema. Default empty object.

additionalProperties @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4
: The value of "additionalProperties" MUST be a boolean or an object. If it is an object, it MUST also be a valid JSON Schema. Default empty schema.

patternProperties @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.4
: The value of "patternProperties" MUST be an object. Each property name of this object SHOULD be a valid regular expression, according to the ECMA 262 regular expression dialect. Each property value of this object MUST be an object, and each object MUST be a valid JSON Schema. Default empty object.


dependencies @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.4.5
: |
    For all (name, schema) pair of schema dependencies, if the instance has a property by this name, then it must also validate successfully against the schema.
    Note that this is the instance itself which must validate successfully, not the value associated with the property name.
    For each (name, propertyset) pair of property dependencies, if the instance has a property by this name, then it must also have properties with the same names as propertyset.
    This keyword's value MUST be an object. Each value of this object MUST be either an object or an array.
    If the value is an object, it MUST be a valid JSON Schema. This is called a schema dependency.
    If the value is an array, it MUST have at least one element. Each element MUST be a string, and elements in the array MUST be unique. This is called a property dependency.

### Any instance type

enum @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.1
: |
    An instance validates successfully against this keyword if its value is equal to one of the elements in this keyword's array value.
    The value of this keyword MUST be an array. This array MUST have at least one element. Elements in the array MUST be unique.
    Elements in the array MAY be of any type, including null.

type @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.2
: |
    An instance matches successfully if its primitive type is one of the types defined by keyword. Recall: "number" includes "integer".
    The value of this keyword MUST be either a string or an array. If it is an array, elements of the array MUST be strings and MUST be unique.
    String values MUST be one of the seven primitive types defined by the core specification.

allOf @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.3
: |
    An instance validates successfully against this keyword if it validates successfully against all schemas defined by this keyword's value.
    This keyword's value MUST be an array. This array MUST have at least one element.
    Elements of the array MUST be objects. Each object MUST be a valid JSON Schema.

anyOf @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.4
: |
    An instance validates successfully against this keyword if it validates successfully against at least one schema defined by this keyword's value.
    This keyword's value MUST be an array. This array MUST have at least one element.
    Elements of the array MUST be objects. Each object MUST be a valid JSON Schema.

oneOf @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.5
: |
    An instance validates successfully against this keyword if it validates successfully against exactly one schema defined by this keyword's value.
    This keyword's value MUST be an array. This array MUST have at least one element.
    Elements of the array MUST be objects. Each object MUST be a valid JSON Schema.

not @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.6
: |
    An instance is valid against this keyword if it fails to validate successfully against the schema defined by this keyword.
    This keyword's value MUST be an object. This object MUST be a valid JSON Schema.

definitions @http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.5.7
: This keyword plays no role in validation per se. Its role is to provide a standardized location for schema authors to inline JSON Schemas into a more general schema. This keyword's value MUST be an object. Each member value of this object MUST be a valid JSON Schema.

### Metadata

title @http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1
: The value MUST be a string. It MAY be used in root schemas, and in any subschemas.

description @http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1
: provide explanation about the purpose of the instance described by this schema. The value MUST be a string. It MAY be used in root schemas, and in any subschemas.

default @http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.2
: |
    This keyword can be used to supply a default JSON value associated with a particular schema. It is RECOMMENDED that a default value be valid against the associated schema.
    This keyword MAY be used in root schemas, and in any subschemas.
    There are no restrictions placed on the value of this keyword.

### Format

format @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7
: |
    Structural validation alone may be insufficient to validate that an instance meets all the requirements of an application. The "format" keyword is defined to allow interoperable semantic validation for a fixed subset of values which are accurately described by authoritative resources, be they RFCs or other external specifications.
    The value of this keyword is called a format attribute. It MUST be a string. A format attribute can generally only validate a given set of instance types. If the type of the instance to validate is not in this set, validation for this format attribute and instance SHOULD succeed.

#### Defined attibutes

date-time @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3.1
: A string instance is valid against this attribute if it is a valid date representation as defined by RFC 3339, section 5.6 [RFC3339]. This attribute applies to string instances.

email @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3.2
: A string instance is valid against this attribute if it is a valid Internet email address as defined by RFC 5322, section 3.4.1 [RFC5322]. This attribute applies to string instances.

hostname @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3.3
: A string instance is valid against this attribute if it is a valid representation for an Internet host name, as defined by RFC 1034, section 3.1 [RFC1034]. This attribute applies to string instances.

ipv4 @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3.4
: A string instance is valid against this attribute if it is a valid representation of an IPv4 address according to the "dotted-quad" ABNF syntax as defined in RFC 2673, section 3.2 [RFC2673]. This attribute applies to string instances.

ipv6 @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3.5
: A string instance is valid against this attribute if it is a valid representation of an IPv6 address as defined in RFC 2373, section 2.2 [RFC2373]. This attribute applies to string instances.

uri @http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3.6
: A string instance is valid against this attribute if it is a valid URI, according to [RFC3986]. This attribute applies to string instances.


## JSON Hypermedia

[specification](http://json-schema.org/latest/json-schema-hypermedia.html)

describes how JSON Schema can be used to define hyperlinks on instance data. It also defines how to provide additional information required to interpret JSON data as rich multimedia documents.

readOnly @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.4.4
: |
    If it has a value of boolean true, this keyword indicates that the instance property SHOULD NOT be changed, and attempts by a user agent to modify the value of this property are expected to be rejected by a server.
    The value of this keyword MUST be a boolean. The default value is false.

pathStart @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.4.5
: |
    this property is a URI that defines what the instance's URI MUST start with in order to validate. The value of the "pathStart" property MUST be resolved relative to the closest URI Resolution Scope (as defined in the core specification [FIXME link]), using the rules from RFC 3986, Sec 5 [RFC3986].
    When multiple schemas have been referenced for an instance, the user agent can determine if this schema is applicable for a particular instance by determining if the URI of the instance begins with the the value of the "pathStart" property. If the URI of the instance does not start with this URI, or if another schema specifies a starting URI that is longer and also matches the instance, this schema SHOULD NOT be considered to describe the instance. Any schema that does not have a pathStart property SHOULD be considered applicable to all the instances for which it is referenced.

### Links

links @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.4.1
: The "links" property of schemas is used to associate Link Description Objects with instances. The value of this property MUST be an array, and the items in the array must be Link Description Objects, as defined below.

Example:

    {
        "title": "Schema defining links",
        "links": [
            {
                "rel": "full",
                "href": "{id}"
            }, {
                "rel": "parent",
                "href": "{parent}"
            }
        ]
    }

#### Link Description Object (LDO)

href @http://json-schema.org/latest/json-schema-hypermedia.html#href
: |
    The value of the "href" link description property is a template used to determine the target URI of the related resource. The value of the instance property SHOULD be resolved as a URI-Reference per RFC 3986 [RFC3986] and MAY be a relative reference to a URI. The base URI to be used for relative URI resolution SHOULD be the URI used to retrieve the instance object (not the schema).
    The base URI to be used for relative URI resolution SHOULD is defined as follows:
    if the data has a link defined, with a relation of "self", then the "href" value of that link is used, unless the relation of the link being resolved is also "self"
    otherwise, the URI should be resolved against the link with relation "self" belonging to the closest parent node in the JSON document, if it exists
    otherwise, the URI used to fetch the document should be used.
    This property is not optional.
    Urls are escaped - percent escape, brackets and dollar sign replace

rel @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.2
: |
    The value of the "rel" property indicates the name of the relation to the target resource. This property is not optional.
    The relation to the target SHOULD be interpreted as specifically from the instance object that the schema (or sub-schema) applies to, not just the top level resource that contains the object within its hierarchy. A link relation from the top level resource to a target MUST be indicated with the schema describing the top level JSON representation.


Relationship definitions SHOULD NOT be media type dependent, and users are encouraged to utilize existing accepted relation definitions, including those in existing relation registries (see RFC 4287 [RFC4287]). However, we define these relations here for clarity of normative interpretation within the context of JSON Schema defined relations:

- self - If the relation value is "self", when this property is encountered in the instance object, the object represents a resource and the instance object is treated as a full representation of the target resource identified by the specified URI.
- full - This indicates that the target of the link is the full representation for the instance object. The instance that contains this link may not be the full representation.
- describedBy - This indicates the target of the link is a schema describing the instance object. This MAY be used to specifically denote the schemas of objects within a JSON object hierarchy, facilitating polymorphic type data structures.
- root- This relation indicates that the target of the link SHOULD be treated as the root or the body of the representation for the purposes of user agent interaction or fragment resolution. All other data in the document can be regarded as meta-data for the document. The URI of this link MUST refer to a location within the instance document, otherwise the link MUST be ignored.
The following relations are applicable for schemas (the schema as the "from" resource in the relation):

- instances - This indicates the target resource that represents a collection of instances of a schema.
- create - This indicates a target to use for creating new instances of a schema. This link definition SHOULD be a submission link with a non-safe method (like POST).

Links defined in the schema using these relation values SHOULD not require parameterization with data from the instance, as they describe a link for the schema, not the instances.

title @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.3
: |
    This property defines a title for the link. The value must be a string.
    User agents MAY use this title when presenting the link to the user.

targetSchema @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.4
: This property value is advisory only, and is a schema that defines the expected structure of the JSON representation of the target of the link, if the target of the link is returned using JSON representation.

mediaType @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.5
: The value of this property is advisory only, and represents the media type RFC 2046 [RFC2046], that is expected to be returned when fetching this resource. This property value MAY be a media range instead, using the same pattern defined in RFC 2161, section 14.1 - HTTP "Accept" header [RFC2616]. If this property's value is not specified, then the value should be taken to be "application/json".

#### Submission Link Properties

method @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.6.1
: |
    This property defines which method can be used to access the target resource. In an HTTP environment, this might be "GET" or "POST" (or other HTTP methods).
    Some link relation values imply a set of appropriate HTTP methods to be used for the link. For example, a client might assume that a link with a relation of "edit" can be used in conjuction with the "PUT" HTTP method. If the client does not know which methods might be appropriate, then this SHOULD default to "GET".

encType @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.6.2
: f present, this property indicates a query media type format that the server supports for querying or posting to the collection of instances at the target resource. The query can be suffixed to the target URI to query the collection with property-based constraints on the resources that SHOULD be returned from the server or used to post data to the resource (depending on the method).
example: "application/x-www-form-urlencoded"

schema @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.5.6.3
: |
    This property contains a schema which defines the acceptable structure of the submitted request. For a GET request, this schema would define the properties for the query string and for a POST request, this would define the body.
    Note that this is separate from the URI templating of "href" (which uses data from the instance, not submitted by the user). It is also separate from the "targetSchema" property, which provides a schema for the data that the client should expect to be returned when they follow the link.

### Media

media @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.4.3
: |
    The "media" property indicates that this instance contains non-JSON data encoded in a JSON string. It describes the type of content and how it is encoded.
    The value of this property MUST be an object, and SHOULD be ignored for any instance that is not a string.

Example:

    {
        "title": "Schema using hypermedia",
        "properties": {
            "imgData": {
                "title": "Article Illustration (small)",
                "type": "string",
                "media": {
                    "binaryEncoding": "base64",
                    "type": "image/png"
                }
            }
        }
    }

#### Properties

The value of the "media" keyword MAY contain any of the following properties:

binaryEncoding @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.4.3.1.1
: If the instance value is a string, this property defines that the string SHOULD be interpreted as binary data and decoded using the encoding named by this property. RFC 2045, Sec 6.1 [RFC2045] lists the possible values for this property.
example: base64

type @http://json-schema.org/latest/json-schema-hypermedia.html#rfc.section.4.3.1.2
: |
    The value of this property must be a media type, as defined by RFC 2046 [RFC2046]. This property defines the media type of instances which this schema defines.
    If the "binaryEncoding" property is not set, but the instance value is a string, then the value of this property SHOULD specify a text document type, and the character set SHOULD be the character set into which the JSON string value was decoded (for which the default is Unicode).
example: image/png
