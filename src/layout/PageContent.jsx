function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </main>
  );
}

export default PageContent;