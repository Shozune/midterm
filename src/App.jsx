import Container from 'react-bootstrap/Container';
import Mass from './Mass';
import Temperature from './Temperature';
import Volume from './Volume';


export default function App() {
  return (
    <Container className="my-4">
      <h3 className="mb-3">Mass Conversion</h3>
      <Mass />

      <h3 className="mt-4 mb-3">Temperature Conversion</h3>
      <Temperature />

      <h3 className="mt-4 mb-3">Volume Conversion</h3>
      <Volume />
    </Container>
  );
}