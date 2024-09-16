import { Test, TestingModule } from '@nestjs/testing';
import { InternetPackageResolver } from './internet-package.resolver';

describe('InternetPackageResolver', () => {
  let resolver: InternetPackageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternetPackageResolver],
    }).compile();

    resolver = module.get<InternetPackageResolver>(InternetPackageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
