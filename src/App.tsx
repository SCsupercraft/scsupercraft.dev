import './App.css';
import { ThemeProvider } from '@/components/theme-provider';
import { TypographyH1 } from '@/components/ui/text';
import { Construction } from 'lucide-react';

function App() {
	return (
		<ThemeProvider>
			<div className="flex justify-center items-center w-full h-dvh">
				<Construction
					size={'2.25rem'}
					color="yellow"
				></Construction>
				<TypographyH1 className="ml-2 mr-2">
					Under construction, check back later!
				</TypographyH1>
				<Construction
					size={'2.25rem'}
					color="yellow"
				></Construction>
			</div>
		</ThemeProvider>
	);
}

export default App;
