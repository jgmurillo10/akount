# Welcome to akount!

This is a simple web application to manage your money easily.

## Main concepts

A debt is considered such as money that you owe to an actor. The actor has a name could be a person or even an entity. Also, as the debt, the receivables have actors but, receivables exist when someone owe you money. Although the difference, both entities have the same properties

|Property   |  values |  description |
|---|---|---|
| id |  String  | The unique ID |
| description |  String | Description of the debt/receivable |
| value | Double  | Money  |
| interest_rate | Double  | If the debt/receivable has interest x otherwise 0 |
| creation_date | Date  | Date in which the debt/receivable was created |
| alert_date | Date  | Date in which the debt/receivable will alert the user |
| deadline_date | Date  | Date in which the debt/receivable has to be paid/charged |
| type | long, medium or short term |  Type of debt/receivable |
| actor | String  | Name of the actor |
| actor_type | person or entity  | Type of the actor |




## API
Here you have the main routes available to consume

### All

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/all |  Get all debts and receivables  |
| GET |  /api/all/:user_id  | Get a debt or receivable by ID |
| GET |  /api/all/sum  | Get a general balance of debts and receivables |
| GET |  /api/all/?start=x&end=y  | Get all debts and receivables between x and y dates |

### Debts

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/debts |  Get all the debts  |
| GET | /api/debts/sum |  Get the sum of all the debts  |
| GET |  /api/debts/?start=x&end=y  | Get all debts between x and y dates|
| GET |  /api/debts/:debt_id  | Get a debt by ID |
| GET |  /api/debts/:debt_id/  | Get a debt actor by ID |
| POST  |  /api/debts | Add a debt  |
| PUT  | /api/debts/:debt_id  |  Update a debt |
| DELETE  |  /api/debts/:debts_id |  Delete a debt |

### Receivables

|HTTP Method   |  URI |  description |
|---|---|---|
| GET | /api/receivables |  Get all the receivables  |
| GET | /api/receivables/sum |  Get the sum of all the receivables  |
| GET |  /api/receivables/?start=x&end=y  | Get all receivables between x and y dates |
| GET |  /api/receivables/:receivable_id  | Get a receivable by ID |
| GET |  /api/receivables/:receivable_id/  | Get a receivable actor by ID |
| POST  |  /api/receivables | Add a receivable  |
| PUT  | /api/receivables/:receivable_id  |  Update a receivable |
| DELETE  |  /api/receivables/:receivable_id |  Delete a receivable |
