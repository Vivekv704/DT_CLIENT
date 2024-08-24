# API DOCUMENTATION

Download all dependencies
```
npm install
or
yarn install 
```

Run Command
```
npm start
```

<h3>Nudge Management System</h3>
Base URL
The API can be accessed at:

Local Development: http://localhost:3000/api/v3/app
Production Server: https://example.com/api/v3/app
API Endpoints
1. Create a Nudge

Endpoint: /nudges
Method: POST
Description: Create a new nudge.
Request Body:
```
{
    "title": "Motivational Nudge",
    "description": "This is a motivational nudge",
    "triggerTime": "2024-08-31T14:30:00Z",
    "priority": "high",
    "recipientId": "64c8dfe1e4b0c2076edeb24f"
}
```
Response:
```
{
    "message": "Nudge created successfully",
    "nudgeId": "64c9c9405ad93f6628bd577c"
}

```
Status Code: 201 Created

2. Get Nudge by ID

Endpoint: /nudges/:id
Method: GET
Description: Fetch details of a specific nudge by its ID.
Request Parameters:
id: The unique identifier for the nudge.

Response:
```
{
    "_id": "64c9c9405ad93f6628bd577c",
    "title": "Motivational Nudge",
    "description": "This is a motivational nudge",
    "triggerTime": "2024-08-31T14:30:00Z",
    "priority": "high",
    "recipientId": "64c8dfe1e4b0c2076edeb24f"
}

```

3. Get All Nudges

Endpoint: /nudges
Method: GET
Description: Fetch a list of all nudges.
Response:
```
[
    {
        "_id": "64c9c9405ad93f6628bd577c",
        "title": "Motivational Nudge",
        "description": "This is a motivational nudge",
        "triggerTime": "2024-08-31T14:30:00Z",
        "priority": "high",
        "recipientId": "64c8dfe1e4b0c2076edeb24f"
    },
    {
        "_id": "64c9c9415ad93f6628bd577d",
        "title": "Reminder Nudge",
        "description": "This is a reminder nudge",
        "triggerTime": "2024-09-01T10:00:00Z",
        "priority": "medium",
        "recipientId": "64c8dfe1e4b0c2076edeb250"
    }
]

```
Status Code: 200 OK

4. Update a Nudge

Endpoint: /nudges/:id
Method: PUT
Description: Update an existing nudge by its ID.
Request Parameters:
id: The unique identifier for the nudge.
Request Body
```
{
    "title": "Updated Nudge",
    "description": "This is an updated nudge description",
    "triggerTime": "2024-09-05T15:00:00Z",
    "priority": "low",
    "recipientId": "64c8dfe1e4b0c2076edeb24f"
}

```
Response:
```
{
    "message": "Nudge updated successfully"
}

```

Status Code: 200 OK

5. Delete a Nudge

Endpoint: /nudges/:id
Method: DELETE
Description: Delete a specific nudge by its ID.
Request Parameters:
id: The unique identifier for the nudge.
Response:
```
{
    "message": "Nudge deleted successfully"
}

```

<h3>Object Data Model for "Nudge"</h3>
The "Nudge" object represents a message or reminder that is sent to a recipient at a specific time. Below is the object model:
```
{
    "_id": "ObjectId",
    "title": "String",
    "description": "String",
    "triggerTime": "DateTime",
    "priority": "String",
    "recipientId": "ObjectId"
}

<h3>API Use Cases</h3>
1. Creating a Nudge: The POST /nudges endpoint allows the creation of a new nudge. The payload includes the title, description, trigger time, priority, and recipient ID.

2. Fetching a Nudge by ID: The GET /nudges/:id endpoint retrieves a specific nudge using its ID. This is useful for viewing detailed information about a particular nudge.

3. Fetching All Nudges: The GET /nudges endpoint returns a list of all nudges. This can be used for displaying all nudges in the system.

4. Updating a Nudge: The PUT /nudges/:id endpoint allows updating an existing nudge. You can change any of the nudge’s properties, such as the title, description, or trigger time.

5. Deleting a Nudge: The DELETE /nudges/:id endpoint deletes a specific nudge by its ID. This is useful for removing nudges that are no longer needed.




