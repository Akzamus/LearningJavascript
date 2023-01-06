enum StatusCode {
    SUCCESS,
    IN_PROCESS,
    FAILED
}

const response = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
}

enum Roles {
    ADMIN = 'admin',
    USER = 'user'
}