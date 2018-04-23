import { Observable } from 'rxjs';

Observable.of(1, 2).subscribe(
	value => console.log(value)
);
