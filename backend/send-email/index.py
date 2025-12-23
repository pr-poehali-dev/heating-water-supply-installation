import json
import os
import urllib.request
import urllib.parse
from pydantic import BaseModel, Field, EmailStr
from typing import Dict, Any


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=5, max_length=20)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=1000)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обработка заявок с сайта и отправка в Telegram
    Args: event - запрос с данными формы (name, phone, email, message)
          context - контекст выполнения функции
    Returns: Результат отправки сообщения в Telegram
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    contact_req = ContactRequest(**body_data)
    
    bot_token = os.environ['TELEGRAM_BOT_TOKEN'].strip()
    chat_id = os.environ['TELEGRAM_CHAT_ID'].strip()
    
    telegram_message = f"""🔔 Новая заявка с сайта ТеплоМастер

👤 Имя: {contact_req.name}
📞 Телефон: {contact_req.phone}
📧 Email: {contact_req.email}

💬 Сообщение:
{contact_req.message}"""
    
    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {
        'chat_id': chat_id,
        'text': telegram_message,
        'parse_mode': 'Markdown'
    }
    
    try:
        req = urllib.request.Request(
            telegram_url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'success': False, 'error': str(e)}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Telegram message sent successfully'}),
        'isBase64Encoded': False
    }