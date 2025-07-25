export default function TypeScriptView() {
	return (
		<div>
			<p>
				<pre>
					{`class TypeSafeString<TMap extends Record<string, string> = {}> {
  private map: TMap;

  constructor() {
    this.map = {} as TMap;
  }

  set<K extends string>(
    key: K,
    value: string
  ): TypeSafeString<TMap & Record<K, string>> {
    (this.map[key] as any) = value;
    return this;
  }

  get(key: keyof TMap): string {
    return this.map[key];
  }
}

const map = new TypeSafeString().set("foo", "bar").set("baz", "qux");

const r1 = map.get("foo");
const r2 = map.get("hi");

tsc에서 값을 추가한다는 개념이 intersection type으로 구현한다는게 아직 어색함

TypeScript를 집합으로 본다는 관점에서 {} type은 빈값이자 모든 걸 포함한 집합이며, property가 추가될 수록, 즉 좀 더 자세한 값을 가질수록 작은 크기의 집합이 된다.
intersection type은 교집합이며이기에 값을 추가하면서 점점 줄어든다가 다른 의미로는 값을 추가한다로 될 수 있다.


뭔말이냐


관련 문제들

type User = {
  id: string;
  name: string;
  email: string;
};

class SDK {
  loggedInUser?: User;

  constructor(loggedInUser?: User) {
    this.loggedInUser = loggedInUser;
  }

  assertLoggedInUser(): asserts this is this & { loggedInUser: User } {
    if (!this.loggedInUser) {
      throw new Error("User is not logged in");
    }
  }

  createPost(title: string, content: string) {
    const user = this.loggedInUser;

    this.assertLoggedInUser();

    const loggedUser = this.loggedInUser;
  }
}

class Form<TValue> {
  error?: string;

  constructor(
    public value: TValue,
    private validate: (value: TValue) => string | void
  ) {}

  isValid(): this is this & { error: string } {
    const result = this.validate(this.value);

    if (typeof result === "string") {
      this.error = result;
      return true;
    }

    this.error = undefined;
    return false;
  }
}

const form = new Form({ user: "", password: "" }, (value) => {
  if (!value.user) return "user is required";
  if (!value.password) return "password is required";

  return;
});

if (form.isValid()) {
  form.error === "string";
} else {
  form.error === undefined;
}
`}
				</pre>
			</p>
		</div>
	);
}

type User = {
	id: string;
	name: string;
	email: string;
};

class SDK {
	loggedInUser?: User;

	constructor(loggedInUser?: User) {
		this.loggedInUser = loggedInUser;
	}

	assertLoggedInUser(): asserts this is this & { loggedInUser: User } {
		if (!this.loggedInUser) {
			throw new Error('User is not logged in');
		}
	}

	createPost(title: string, content: string) {
		const user = this.loggedInUser;

		this.assertLoggedInUser();

		const loggedUser = this.loggedInUser;
	}
}

class Form<TValue> {
	error?: string;

	constructor(
		public value: TValue,
		private validate: (value: TValue) => string | void,
	) {}

	isValid(): this is this & { error: string } {
		const result = this.validate(this.value);

		if (typeof result === 'string') {
			this.error = result;
			return true;
		}

		this.error = undefined;
		return false;
	}
}

const form = new Form({ user: '', password: '' }, (value) => {
	if (!value.user) return 'user is required';
	if (!value.password) return 'password is required';

	return;
});

if (form.isValid()) {
	form.error === 'string';
} else {
	form.error === undefined;
}
