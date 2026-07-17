import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class VoltcastApi implements ICredentialType {
	name = 'voltcastApi';

	displayName = 'Voltcast API';

	icon: Icon = {
		light: 'file:../nodes/Voltcast/voltcast.svg',
		dark: 'file:../nodes/Voltcast/voltcast.dark.svg',
	};

	documentationUrl = 'https://voltcast.com/docs#authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Create one on the Voltcast dashboard — free tier available',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://voltcast.com/api/v1',
			url: '/prices/DE-LU',
		},
	};
}
