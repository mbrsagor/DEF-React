# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'rferadb',
        'USER': 'macair',
        'PASSWORD': 'p12345678',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
